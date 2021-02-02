<template>
    <div class="situation">
        <div class="chart-box">
            <LineEcharts ref="line_charts" :line-data="lineData"></LineEcharts>
        </div>
        <div class="save-button">
            <Button type="primary" @click="saveCurrentData">保存当前数据</Button>
        </div>
    </div>
</template>

<script>

    import LineEcharts from "../../components/LineEcharts";
    import apis from "../../http/api";

    export default {
        name: 'Home',
        components: {
            LineEcharts,
        },
        data() {
            return {
                lineData: {},                   //折线图数据
            }
        },
        async created() {
            await this.getRandomData();
            this.timer = setInterval(async () => {
                await this.getRandomData()
            }, 10000);
        },
        methods: {
            async getRandomData() {
                await apis.getRandomData().then(res => {
                    const {data, errCode, msg} = res;
                    if (errCode === 0) {
                        this.lineData = data.data
                    } else {
                        this.$Message.error(msg)
                    }
                })
            },
            async saveCurrentData() {
                await apis.saveCurrentData(this.lineData).then(res => {
                    const {errCode, msg} = res;
                    if (errCode === 0) {
                        this.$Message.success('保存成功')
                    } else {
                        this.$Message.error(msg)
                    }
                })
            }
        },
        beforeDestroy() {
            clearInterval(this.timer)
        }
    }
</script>

<style scoped>
    .chart-box {
        width: 100%;
    }

    .save-button {
        text-align: center;
    }
</style>
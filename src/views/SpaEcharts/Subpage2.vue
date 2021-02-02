<template>
    <div class="situation">
        <div class="chart-box">
            <LineEcharts ref="line_charts" :line-data="lineData"></LineEcharts>
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
            await this.getSavedData();
        },
        methods: {
            async getSavedData() {
                await apis.getSavedData().then(res => {
                    const {data, errCode, msg} = res;
                    if (errCode === 0) {
                        this.lineData = data.data
                    } else {
                        this.$Message.error(msg)
                    }
                })
            }
        },
    }
</script>

<style scoped>
    .chart-box {
        width: 100%;
    }
</style>
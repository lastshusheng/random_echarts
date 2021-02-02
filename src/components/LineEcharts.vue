<template>
    <div id="myChart"></div>
</template>

<script>
    export default {
        name: "LineECharts",
        components: {},
        props: {
            lineData: Object
        },
        watch: {
            lineData: function (newVal) {
                this.myChart.setOption({
                    xAxis: {
                        data: newVal.xAxis
                    },
                    series: [{
                        name: 'Y轴的值',
                        data: newVal.yAxis
                    }]
                });
            }
        },
        data() {
            return {}
        },
        mounted() {
            this.myChart = this.$echarts.init(document.getElementById('myChart'))  // 基于准备好的dom，初始化echarts实例
            this.drawLine()
        },
        methods: {
            drawLine() {
                // 绘制图表
                this.myChart.setOption({
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: []
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, '50%']
                    },
                    series: [
                        {
                            name: 'Y轴的值',
                            type: 'line',
                            smooth: true,
                            symbol: 'none',
                            stack: 'a',
                            areaStyle: {
                                normal: {}
                            },
                            data: []
                        }
                    ]
                });
            }
        }
    }
</script>

<style scoped>
    #myChart {
        width: 100%;
        height: 70vh;
    }
</style>
// 柱状图1
(function () {
    var mychart = echarts.init(document.querySelector(".bar .chart"));

    option = {
        color: ["skyblue"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        // 修改图表的大小
        grid: {
            left: '0%',
            top: '10%',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        // x的信息
        xAxis: [
            {
                type: 'category',
                data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
                axisTick: {
                    alignWithLabel: true
                },

                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                },
                xAxisLine: {
                    show: false
                },
            }
        ],


        yAxis: [
            {
                type: 'value',
                // y轴文字标签
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                },
                // y轴线条样式
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 2
                    }
                },
                // y轴分割线
                splitLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255, .1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '35%',
                itemStyle: {
                    //修改柱子圆角
                    barBorderRadius: 5
                },
                data: [10, 52, 200, 334, 390, 330, 220]
            }
        ]
    };
    mychart.setOption(option);
    // 让图表跟随屏幕一起变化
    window.addEventListener("resize", function () {
        mychart.resize();
    })
})();

// 第二个柱状图
(function () {
    var mychart = echarts.init(document.querySelector(".bar2 .chart"));
    var myColor = ["#1089e7", "#f57474", "#56d0e3", "#f8b448", "#8b78f6"];
    option = {
        grid: {
            top: '10%',
            left: '22%',
            bottom: '10%',
            // containLabel: true
        },
        xAxis: {
            // 不显示x轴相关信息
            show: false
        },
        yAxis: [
            {
                type: 'category',
                inverse: true,
                data: ['HTML', 'CSS', 'JavaScript', 'VUE', 'Node'],
                // 刻度线
                asisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#fff",
                    fontSize: "12"
                },
            },
            {
                show: true,
                inverse: true,
                data: ['702', '350', '610', '793', '664'],
                // 刻度线
                asisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: "#fff",
                        fontSize: "12"
                    }


                },
            }
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                data: [70, 34, 60, 78, 69],
                yAxisIndex: 0,
                itemStyle: {
                    barBorderRadius: 20,
                    color: function (params) {
                        return myColor[params.dataIndex];
                    }
                },
                // 柱子之间的距离
                barCategoryGap: 50,
                // 柱子的宽度
                barWidth: 10,
                // 显示柱子内的文字
                label: {
                    show: true,
                    position: "inside",
                    // { c }会自动的解析为数据
                    formatter: "{c}%"
                },
            },
            {
                name: '框',
                type: 'bar',
                data: [100, 100, 100, 100, 100],
                yAxisIndex: 1,
                // 柱子之间的距离
                barCategoryGap: 50,
                // 柱子的宽度
                barWidth: 15,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15,
                },
            },
        ]
    };
    mychart.setOption(option);
    // 让图表跟随屏幕一起变化
    window.addEventListener("resize", function () {
        mychart.resize();
    })
})();
// 折线图制作
(function () {
    var mychart = echarts.init(document.querySelector(".line .chart"));
    var yearData = [
        {
            year: '2020',
            data: [
                [24, 40, 191, 404, 90, 210, 230, 120, 230, 210, 120],
                [40, 64, 404, 191, 290, 330, 310, 213, 180, 200, 79]
            ]
        },
        {
            year: '2021',
            data: [
                [123, 175, 112, 67, 90, 210, 110, 58, 180, 210, 120],
                [146, 168, 240, 180, 330, 150, 180, 200, 80, 100, 200]
            ]
        }
    ];
    option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            // 如果series对象有name值，则legend可以不用写data
            data: ['邮件营销', '联盟广告'],
            // 修改图例组件颜色 
            textStyle: {
                color: "#4c9bfd",
            },
            right: "10%"
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '3月', '5月', '7月', '9月', '11月'],
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            axisLine: {
                show: false
            },


        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            axisLine: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255, 255, 255, .1)"
                }
            },

        },
        series: [
            {
                name: '新增粉丝',
                type: 'line',
                stack: '总量',
                // 带有弧度
                smooth: true,
                data: yearData[0].data[0]
            },
            {
                name: '新增游客',
                type: 'line',
                stack: '总量',
                smooth: true,
                data: yearData[1].data[1]
            },
        ]
    };
    mychart.setOption(option);
    // 让图表跟随屏幕一起变化
    window.addEventListener("resize", function () {
        mychart.resize();
    });
    // 点击切换效果
    $(".line h2").on("click", "a", function () {
        // console.log($(this).index());
        // console.log(yearData[$(this).index()]);
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        // 须要重新渲染
        mychart.setOption(option);
        console.log(yearData);
    })
})();
// 右边折线图
(function () {
    var mychart = echarts.init(document.querySelector(".line2 .chart"));
    var option = {
        tooltip: {
            trigger: 'axis',
            // axisPointer: {
            //     type: 'cross',
            //     label: {
            //         backgroundColor: '#6a7985'
            //     }
            // }
        },
        legend: {
            data: ['邮件营销', '联盟广告']
        },

        grid: {
            left: '10%',
            top: '30%',
            right: '10%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    color: "rgba(255,255,255,6)",
                    fontSize: 12
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255, .2)"
                    }
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    color: "#4c9bfd"
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                },
            }
        ],
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
                smooth: true,
                // 单独修改线条的颜色
                lineStyle: {
                    color: "#0184d5",
                    width: 3
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: "rgba(1,132,213,0.4)"//渐变的起始颜色
                            },
                            {

                                offset: 0.8,
                                color: "rgba(1,132,213,0.4)"//渐变的结束颜色
                            }
                        ],
                        false

                    ),
                    shadowColor: "rgba(0,0,0,0.1)",
                },
                //设置小圆点
                Symbol: "circle",
                //拐点大小
                symbolSize: 5,
                //设置拐点颜色
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221,220,107,.1)",
                    borderWidth: 12
                },
                //开始不显示拐点，鼠标经过显示
                showSymbol: false
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20],
                smooth: true,
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: "rgba(1,132,213,0.4)"//渐变的起始颜色
                            },
                            {

                                offset: 0.8,
                                color: "rgba(0, 216, 135, 0.1)"//渐变的结束颜色
                            }
                        ],
                        false

                    ),
                    shadowColor: "rgba(0,0,0,0.1)",
                },
                //设置小圆点
                Symbol: "circle",
                //拐点大小
                symbolSize: 5,
                //设置拐点颜色
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221,220,107,.1)",
                    borderWidth: 12
                },
                //开始不显示拐点，鼠标经过显示
                showSymbol: false


            },
        ]
    };
    mychart.setOption(option);
    // 让图表跟随屏幕一起变化
    window.addEventListener("resize", function () {
        mychart.resize();
    });
})();
// 饼图
(function () {
    var mychart = echarts.init(document.querySelector(".ple .chart"));
    var option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {

            bottom: '0%',
            left: 'center',
            // 修改小图标的大小
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            },
        },
        series: [
            {
                name: '年龄分布',
                type: 'pie',
                radius: ['40%', '60%'],
                center: ["50%", "50%"],
                label: { show: false },
                labelLine: { show: false },
                avoidLabelOverlap: false,
                // 图片上的文字
                label: {
                    show: false,
                    position: 'center'
                },

                labelLine: {
                    show: false
                },
                data: [
                    { value: 1, name: "0岁以下" },
                    { value: 4, name: "20-29岁" },
                    { value: 2, name: "30-39岁" },
                    { value: 2, name: "40-49岁" },
                    { value: 1, name: "50岁以上" }
                ],
                color: [
                    "#065aab",
                    "#066eab",
                    "#0682ab",
                    "#0696ab",
                    "#06a0ab",
                ],
            }
        ]
    };
    mychart.setOption(option);
    // 让图表跟随屏幕一起变化
    window.addEventListener("resize", function () {
        mychart.resize();
    });
})();
// 玫瑰图
(function () {
    var mychart = echarts.init(document.querySelector(".ple2 .chart"));
    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item'
        },
        legend: {
            bottom: "0%",
            // 修改小图标的大小
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            },
        },


        series: [
            {
                name: "面积模式",
                type: "pie",
                radius: [20, 80],
                center: ["50%", "50%"],
                roseType: "radius",
                // label: { show: false },
                // labelLine: { show: false },
                // // 不显示文字标签
                // label: { show: false },
                // // 不显示连接线
                // labelLine: { show: fasle },
                label: {
                    fontSize: 10
                },
                // itemStyle: {
                //     borderRadius: 8
                // },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '湖北' }
                ]
            }
        ]
    };

    mychart.setOption(option);
    // 让图表跟随屏幕一起变化
    window.addEventListener("resize", function () {
        mychart.resize();
    });
})();
// 模拟地图

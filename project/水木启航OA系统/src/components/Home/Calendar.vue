<template>
<div class='component-calendar'>
    <el-calendar v-model="value">
</el-calendar>
</div>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            value: new Date()
        }
    }
}
</script>
<style type="text/css" lang='scss' scoped>
.component-calendar {
    font-size: 12px;
    text-align: center;
    .el-calendar {
        .el-calendar__header {
            padding: 0px;
            .el-calendar__title {}
            .el-calendar__button-group {}
        }
        .el-calendar__body {
            padding: 0;
            .el-calendar-table {
                thead {
                    th {
                        padding: 5px 0;
                    }
                }
                tbody {
                    .el-calendar-table__row {
                        .prev {
                            .el-calendar-day {
                                height: 10px;
                            }
                        }
                    }
                }
                .el-calendar-day {
                    height: 10px;
                }
            }
        }
    }
}  
</style>
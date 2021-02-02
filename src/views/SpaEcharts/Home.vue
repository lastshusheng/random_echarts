<template>
    <div>
        <div class="layout">
            <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
                <p class="co-study">数据可视化</p>
                <Menu theme="dark" :active-name="selectedName[1]" width="auto" :open-names="[selectedName[0]]">
                    <Submenu name="统计">
                        <template slot="title">
                            <Icon type="ios-stats"></Icon>
                            统计
                        </template>
                        <MenuItem name="Subpage1" to="/analyse/page1">Subpage1</MenuItem>
                        <MenuItem name="Subpage2" to="/analyse/page2">Subpage2</MenuItem>
                    </Submenu>

                </Menu>
            </Sider>
            <Layout :style="{marginLeft: '200px'}">
                <Header :style="{position: 'fixed',width: 'calc(100vw - 200px)',padding: '0 16px',background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
                    <div class="header-box">
                        <div class="header-info">
                            <Breadcrumb :style="{margin: '0',display:'inline'}">
                                <BreadcrumbItem v-for="(item,index) in selectedName" :key="index">{{item}}
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                        <div class="header-menu">
                            <ul>
                                <li><a @click="logout">
                                    <Icon type="ios-log-out"/>
                                    退出</a></li>
                            </ul>
                        </div>
                    </div>
                </Header>
                <Content :style="{margin: '80px 16px 0', background: '#fff', minHeight: 'calc(100vh - 80px)'}">
                    <router-view/>
                </Content>
            </Layout>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                selectedName: [],
                openName: ['统计分析'],
                activeName: '概况'
            }
        },
        created() {
            this.updateSelectName()
        },
        watch: {
            '$route': 'updateSelectName'
        },
        methods: {
            updateSelectName() {
                this.selectedName = [];
                this.$route.matched.forEach(record => {
                    if (typeof (record.name) === 'string' && record.name.length > 0) {
                        this.selectedName.push(record.name)
                    }
                });
            },
            logout() {
                this.$Message.success('退出登陆')
            },
        },

    }
</script>
<style scoped>
    .layout {
        border: 0 solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-header-bar {
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    }

    .co-study {
        text-align: center;
        padding: 15px 0;
        color: white;
        font-weight: bold;
        font-size: large;
    }

    .header-box {
        display: flex;
        justify-content: space-between;
    }

    .header-menu li {
        display: inline;
        margin-right: 10px;
    }

    .ivu-layout-header {
        z-index: 901;
    }
</style>
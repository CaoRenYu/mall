var React = require('react');
var Link = require('react-router').Link;

var job = [
    {name: '文案策划专员', dep: '商品运营部'},
    {name: '电工', dep: '物业部'},
    {name: '治安员', dep: '保卫部'},
    {name: '营销专员', dep: '商品运营部'},
    {name: '车场礼宾员', dep: '保卫部'},
    {name: '收银员', dep: '商品管理部'},
    {name: '理货员', dep: '商品管理部'},
    {name: '总台服务员', dep: '商品管理部'},
];

var Job = React.createClass({
    render: function () {
        var trs = job.map(function (item, i) {
            return (
                <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.dep}</td>
                    <td><Link to={{pathname: "/job/writer", query: {job: item.name}}}>查看详情</Link></td>
                </tr>
            )
        });

        return (
            <div className="main-wrapper m-auto">
                <div className="tab-wrapper">
                    <ul className="tab-top fc">
                        <li className="cur">人才招聘</li>
                    </ul>
                    <div className="tab-content">
                        <table className="table">
                            <tbody>
                            <tr>
                                <td>职位名称</td>
                                <td>所属部门</td>
                                <td>&nbsp;</td>
                            </tr>
                            {trs}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Job;
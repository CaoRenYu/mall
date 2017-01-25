var React = require('react');
var Link = require('react-router').Link;

var Wtiter = React.createClass({
    render: function () {
        var query = this.props.location.query;
        return (
            <div className="main-wrapper m-auto">
                <div className="tab-wrapper">
                    <ul className="tab-top fc">
                        <li className="cur">人才招聘</li>
                    </ul>
                    <div className="tab-content">
                        <div className="item">
                            <article>
                                <h3>{query.job}</h3>
                                <h3>职位描述：</h3>
                                <p>任职要求</p>
                                <p>1、40周岁以下，大学专科以上学历，男女不限；</p>
                                <p>2、性格开朗、思维活跃、善于沟通；</p>
                                <p>3、具备2年以上大型知名商业企业商业营销策划及活动组织执行相关工作经验，了解商业企业现场营运、商品业务管理流程，具备一定的活动策划、文案写作、组织执行及协调能力；</p>
                                <p>4、熟练操作OFFICE等办公软件；</p>
                                <p>5、具备软文写作和线上活动组织经验者优先。</p>
                                <Link to={{pathname: "/job/form", query: {job: query.job}}}>在线申请</Link>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Wtiter;
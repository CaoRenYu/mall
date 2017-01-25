var React = require('react');

var Form = React.createClass({
    componentDidMount: function () {
        var form = document.querySelector('form');
        form.addEventListener('invalid', function (event) {
            var elm = event.target;
            var validityState = elm.validity;
            var name = elm.name;
            switch (name){
                case "sex":
                    if (validityState.patternMismatch){
                        elm.setCustomValidity('男|女');
                    }else {
                        elm.setCustomValidity('');
                    }
                    break;
                case  "status":
                    if (validityState.patternMismatch){
                        elm.setCustomValidity("党员|团员|群众|其他");
                    }else {
                        elm.setCustomValidity('');
                    }
                    break;
                case "marry":
                    if (validityState.patternMismatch){
                        elm.setCustomValidity('未婚|已婚');
                    }else {
                        elm.setCustomValidity('');
                    }
                    break;
                case "child":
                    if (validityState.patternMismatch){
                        elm.setCustomValidity('有|无');
                    }else {
                        elm.setCustomValidity('');
                    }
                    break;
                case "phone":
                    if (validityState.patternMismatch){
                        elm.setCustomValidity("以13|14|15|17|18开头,11位数");
                    }else {
                        elm.setCustomValidity('');
                    }
                    break;
            }
        }, true);
    },

    render: function () {
        var query = this.props.location.query;
        return (
            <div className="main-wrapper m-auto">
                <div className="tab-wrapper">
                    <ul className="tab-top fc">
                        <li className="cur">人才招聘</li>
                    </ul>
                    <div className="tab-content">
                        <article className="job-table">
                            <h3>应聘人员登记表</h3>
                            <form action="./about.html#/job/success" method="get">
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>拟应聘职位</td>
                                        <td colSpan="4">
                                            <input
                                                type="text"
                                                required
                                                className="input-text"
                                                defaultValue={query.job}/>
                                        </td>
                                        <td>期望月薪</td>
                                        <td colSpan="2">
                                            <input type="text" className="input-text" required/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th colSpan="8"><h6>个人信息</h6></th>
                                    </tr>
                                    <tr>
                                        <td>姓名</td>
                                        <td>
                                            <input type="text" className="input-text w55" required/>
                                        </td>
                                        <td>性别</td>
                                        <td>
                                            <input type="text" className="input-text w55" name="sex" required pattern="男|女"/>
                                        </td>
                                        <td>年龄</td>
                                        <td>
                                            <input type="number" className="input-text w55" required/>
                                        </td>
                                        <td>身高(净身高) cm</td>
                                        <td>
                                            <input type="number" className="input-text w55" required/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>体重 kg</td>
                                        <td>
                                            <input type="number" className="input-text w55" required/>
                                        </td>
                                        <td>户籍</td>
                                        <td>
                                            <input type="text" className="input-text w55" required/>
                                        </td>
                                        <td>政治面目</td>
                                        <td>
                                            <input type="text" className="input-text w55" name="status" required pattern="党员|团员|群众|其他"/>
                                        </td>
                                        <td>出生年月</td>
                                        <td>
                                            <input type="text" className="input-text w55" required/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>婚姻状况</td>
                                        <td>
                                            <input type="text" className="input-text w55" name="marry" required pattern="未婚|已婚"/>
                                        </td>
                                        <td>子女情况</td>
                                        <td>
                                            <input type="text" className="input-text w55" name="child" required pattern="有|无"/>
                                        </td>
                                        <td>文化程度(已取得学历)</td>
                                        <td>
                                            <input type="text" className="input-text w55" required/>
                                        </td>
                                        <td>毕业时间</td>
                                        <td>
                                            <input type="text" className="input-text w55" required/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>专业</td>
                                        <td>
                                            <input type="text" className="input-text w55" required/>
                                        </td>
                                        <td>毕业院校</td>
                                        <td colSpan="5">
                                            <input type="text" className="input-text w320" required/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>其他特长</td>
                                        <td colSpan="7">
                                            <textarea cols="30" rows="10" className="text-area" required/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>现居住地</td>
                                        <td colSpan="7">
                                            <input type="text" className="input-text w450" required/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>联系方式</td>
                                        <td>座机电话</td>
                                        <td colSpan="2">
                                            <input type="text" className="input-text" required/>
                                        </td>
                                        <td colSpan="2">移动电话</td>
                                        <td colSpan="2">
                                            <input type="text" className="input-text" name="phone" required pattern="1[34578][0-9]{9}$"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>简介联系人</td>
                                        <td>姓名</td>
                                        <td colSpan="2">
                                            <input type="text" className="input-text"/>
                                        </td>
                                        <td colSpan="2">联系电话</td>
                                        <td colSpan="2">
                                            <input type="text" className="input-text"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>工作经历</td>
                                        <td colSpan="7">
                                            <textarea cols="30" rows="20" className="text-area" required/>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className="form-btn">
                                    <button>提交</button>
                                    <a href="./about.html#/job">返回</a>
                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Form;
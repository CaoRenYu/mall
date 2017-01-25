var React = require('react');
var $ = require('jquery');

var Culture = React.createClass({
    render: function () {
        return (
            <div className="main-wrapper m-auto">
                <div className="tab-wrapper">
                    <ul className="tab-top fc">
                        <li className="cur">文化理念</li>
                    </ul>
                    <div className="tab-content">
                        <div className="item">
                            <article>
                                <h3>当代商城核心理念</h3>
                                <p>企业愿景：建设成为国际化程度较高的零售企业集团</p>
                                <p>企业核心价值观：诚信敬业 务实高效 求知创新 永争一流</p>
                                <p>企业使命：让消费体验美好生活，让合作传递诚信是金，让员工激发无限潜能，让资产创造最大财富，让承担社会责任永远同发展相伴而行</p>
                                <p>企业发展方略：以科学发展观作指导，牢固树立“以人为本”的三大顾客观（消费者、供应商、员工），全面推进以经济效益为中心的经营管理和企业文化，运行机制和思想道德建设，统筹商品、服务、环境、便捷、安全五大商业元素的协调改进，坚持企业品牌战略、人才战略、质量战略的一体化可持续发展战略，在实践中更新发展观念，创新发展思路，在董事会正确领导下，永葆企业的发展后劲和竞争活力</p>
                                <p>企业目标定位：有特色的高档精品零售企业</p>
                                <p>企业目标顾客：追求高品质生活的成功知性人士</p>
                                <p>服务理念：一切为了创造顾客价值</p>
                                <p>营销理念：以顾客为中心，把顾客资源视为企业最宝贵的资源，把满足顾客需求视为企业的生存命脉，关注顾客体验，提供超值服务，提高顾客忠诚度，培养顾客生命价值，持续保持和扩大市场占有率</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Culture;
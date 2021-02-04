import React, { Component } from "react";
import Stories from "./Stories/Stories";
import Feed from "./Feed/Feed";
import "./Feeds.scss";

class Feeds extends Component {
  constructor() {
    super();
    this.state = {
      newComment: "",
      comments: [],
      disabled: true,
      stories: [
        {
          id: "story01",
          img_src:
            "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/136978895_110777060922819_1527151541896137636_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=75H61FqUmwMAX9-l9tZ&tp=1&oh=d0097362bab477276f2bd78204753d96&oe=6032B33A",
          username: "leesoo_",
        },
        {
          id: "story02",
          img_src:
            "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/18094548_373976256332073_6279520749740883968_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=xO-x0RuRCncAX9u609z&tp=1&oh=60ee045da85b7319c341e6382a03a193&oe=60354190",
          username: "yooberry",
        },
        {
          id: "story03",
          img_src:
            "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/23164401_1122987751136861_1064668198781059072_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=93UFDi86qI8AX9ey7uT&tp=1&oh=36cd698779b3f7ef1dc0837a26ad5d0b&oe=6034BEF2",
          username: "thisislongusername",
        },
        {
          id: "story04",
          img_src:
            "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/17332591_729877933847230_355962199388192768_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=AyTI6zNfv5YAX-LIJCe&tp=1&oh=47351f24eda6cbfd58c3e227b90b89c1&oe=60326C76",
          username: "losmeas",
        },
        {
          id: "story05",
          img_src:
            "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/16229037_1651839208442980_7448588071500513280_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=grJPuz_3So8AX_TO6Wc&tp=1&oh=7d6128642103619c4c52e08d3a2e47ee&oe=6035F123",
          username: "snowman",
        },
        {
          id: "story06",
          img_src:
            "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/15623665_1746332985685367_960909700239458304_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=YRwSrxwUvyoAX8UB4j7&tp=1&oh=c9bd6fc4f0cf8a972ebdcd1379eb9754&oe=60331F35",
          username: "christmas",
        },
        {
          id: "story07",
          img_src:
            "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/13549447_1651954635126694_652502710_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=YRhztzy4RQAAX82eHKy&tp=1&oh=48f084360da039dece75f20cd60ad282&oe=6035C2D6",
          username: "shopping",
        },
        {
          id: "story08",
          img_src:
            "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/13388719_257549571279526_815606794_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=mtLIw5zl2O8AX-O7FgO&tp=1&oh=7031e5110f2e2d4e3353ec97b4549f69&oe=6032BE6F",
          username: "withberry",
        },
        {
          id: "story09",
          img_src:
            "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/23507551_965172566954249_890231035516682240_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=QpcGqFaz6FsAX9tfT_i&tp=1&oh=db461a53f0db7a4a83fd252c734f7bf5&oe=603CFB5C",
          username: "americaaa",
        },
      ],
      feeds: [
        {
          id: "feed01",
          index: 0,
          pofile_img_src:
            "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/19051108_1939872686231313_4572090551716806656_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=-J4YglxHgucAX-dOt2F&tp=1&oh=5a7e3dc2779b4660b651f73847197d94&oe=6031D052",
          username: "saemsolyoo",
          location: "hollywood",
          feed_img_src:
            "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/23498108_134140007244278_3200218683876048896_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=RqCdvF9eGwsAX-9NcWh&tp=1&oh=c179ad084cde2fcff5acd7815a7786a1&oe=603332BE",
          likes: 225,
          comments: [
            {
              id: "yooberry",
              comment: "미국놀러가고싶다",
            },
            {
              id: "losmeas",
              comment: "베리 너무 귀엽다 ㅠㅠ",
            },
          ],
          time: "22시간 전",
        },
        {
          id: "feed02",
          index: 1,
          pofile_img_src:
            "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/19051108_1939872686231313_4572090551716806656_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=-J4YglxHgucAX-dOt2F&tp=1&oh=5a7e3dc2779b4660b651f73847197d94&oe=6031D052",
          username: "saemsolyoo",
          location: "SF MOMA",
          feed_img_src:
            "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/15875647_924972100973237_2187726241728036864_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=3h2U9SkiWp8AX9tOBik&tp=1&oh=2c4fecfb204918b8c0eeb33b044f0ea1&oe=60336356",
          likes: 775,
          comments: [
            {
              id: "yooberry",
              comment: "베리 모해~~",
            },
            {
              id: "losmeas",
              comment: "베리 너무 기여워 ㅠㅠ",
            },
          ],
          time: "1일 전",
        },
        {
          id: "feed03",
          index: 2,
          pofile_img_src:
            "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/19051108_1939872686231313_4572090551716806656_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=-J4YglxHgucAX-dOt2F&tp=1&oh=5a7e3dc2779b4660b651f73847197d94&oe=6031D052",
          username: "saemsolyoo",
          location: "",
          feed_img_src:
            "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/23507545_133005887469544_8521983549337763840_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=kWEdQtvavbQAX_p27jY&tp=1&oh=ace23adf6cbcf9364060159834f7a3f9&oe=6030F535",
          likes: 325,
          comments: [
            {
              id: "yooberry",
              comment: "선물 기다릴거야~",
            },
          ],
          time: "2일 전",
        },
      ],
    };
  }

  updateComment = () => {
    const newComment = this.state.newComment;
    this.setState({
      comments: this.state.comments.concat(newComment),
      newComment: "",
    });
  };

  activeSubmitBtn = (e) => {
    if (e.target.value.length > 0) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  };

  getComment = (e) => {
    e.preventDefault();
    this.activeSubmitBtn(e);

    this.setState({ newComment: e.target.value });

    if (e.key === "Enter" && this.state.newComment) {
      this.updateComment();
      e.target.value = "";
    }

    if (e.target.localName === "button" && this.state.newComment) {
      this.updateComment();
      e.target.parentElement[0].value = "";
    }
  };

  render() {
    return (
      <div className="main-container">
        <main>
          <Stories datas={this.state.stories} />
          <article className="main-feed" id="feed00">
            <header>
              <a href="#" className="feed-profile">
                <img
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/19051108_1939872686231313_4572090551716806656_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=-J4YglxHgucAX-dOt2F&tp=1&oh=5a7e3dc2779b4660b651f73847197d94&oe=6031D052"
                  alt="profile image"
                />
              </a>
              <div className="feed-info">
                <a href="#">saemsolyoo</a>
                <a href="#">SF MOMA</a>
              </div>
              <a href="#">
                <i className="fas fa-ellipsis-h"></i>
              </a>
            </header>
            <img
              className="feed-image"
              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/23507545_133005887469544_8521983549337763840_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=kWEdQtvavbQAX_p27jY&tp=1&oh=ace23adf6cbcf9364060159834f7a3f9&oe=6030F535"
              alt="feed image"
            />
            <div className="feed-comment">
              <div className="feed-icons">
                <div className="feed-icons-left">
                  <i className="far fa-heart"></i>
                  <i className="far fa-comment"></i>
                  <i className="far fa-paper-plane"></i>
                </div>
                <i className="far fa-bookmark"></i>
              </div>
              <span className="feed-likes">좋아요 325개</span>
              <ul className="feed-comment-list">
                {this.state.comments.map((comment) => {
                  return (
                    <li>
                      <a href="#">saemsolyoo</a>
                      <span>{comment}</span>
                    </li>
                  );
                })}
              </ul>
              <span className="feed-uploaded-time">30분 전</span>
            </div>

            <form action="" className="feed-comment-form">
              <input
                type="text"
                className="feed-comment-input"
                placeholder="댓글 달기..."
                onKeyUp={this.getComment}
              />
              <button
                className="feed-comment-submit"
                type="submit"
                disabled={this.state.disabled}
                onClick={this.getComment}
              >
                게시
              </button>
            </form>
          </article>
          <Feed feedDatas={this.state.feeds} setComment={this.setComment} />
        </main>
        <aside>
          <div className="my-profile">
            <img
              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/23417167_1609299152461008_1179526000917086208_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=fPNabOAM1wEAX8mQpdE&tp=1&oh=1fce74fa73498220300fac882eec9bff&oe=6033933B"
              alt="profile image"
            />
            <div className="my-profile-info">
              <span>saemsolyoo</span>
              <span>샘솔</span>
            </div>
            <span>전환</span>
          </div>
          <div className="recommend-profile">
            <div>
              <h4>회원님을 위한 추천</h4>
              <span>모두 보기</span>
            </div>
            <ul>
              <li>
                <img
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c1.0.1077.1077a/s640x640/22858338_1106578569477425_3776900631290183680_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=UOQrQ3cPcrYAX-H6MRr&tp=1&oh=c730b33ee582e0d1de67de1c2e534329&oe=6035128B"
                  alt="profile image"
                />
                <div>
                  <span>saemsolyoo</span>
                  <span>샘솔</span>
                </div>
                <span>팔로우</span>
              </li>
              <li>
                <img
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/23416744_1509612842408168_4385556359660175360_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=wQdEUlyM43MAX-oCI0e&tp=1&oh=2bed43f88e471481628ee905893acaf4&oe=6033C0F0"
                  alt="profile image"
                />
                <div>
                  <span>my_nameis_berry</span>
                  <span>berry님 외 1명이 팔로우합니다</span>
                </div>
                <span>팔로우</span>
              </li>
              <li>
                <img
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/23498986_537313673268094_3196332077775585280_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=e3zZrZUyysoAX-9uGvB&tp=1&oh=5e8f991a5d2f7e12c93e4a6e5d1bf38e&oe=603486B3"
                  alt="profile image"
                />
                <div>
                  <span>saemsolyoo</span>
                  <span>Instagram 신규 가입</span>
                </div>
                <span>팔로우</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    );
  }
}

export default Feeds;

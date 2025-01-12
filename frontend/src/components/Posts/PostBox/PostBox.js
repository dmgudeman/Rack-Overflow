import "./PostBox.css"

function PostBox ({ post: { text, author, title }}) {
  const { username } = author;
  return (
    <div className="post">
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <p className="post-box-body">{text}</p>
      </div>
      <div>
        <div className="post-box-tags-div">
          <span>tag 1</span><span>tag 2</span><span>tag 3</span><span>tag 4</span><span>tag 5</span><span>tag 6</span>
        </div>
        <div className="post-box-ratings-comments-username">
          <div className="post-box-ratings-comments">
            <button>
              Comments
            </button>
            <button>
              Ratings
            </button>
          </div>
          <div className="post-box-username">
            <div><span>{String.fromCodePoint(0x2B24)}</span> {username}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostBox;
import "../css-landing.css"

const ContentContainer = () => {

    return (
        <section className="content-container">
            <div className="card">
                <img src="/card1.png" alt="card1" />
                <div className="card-body">
                    <h3>long established</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is that....</p>
                </div>
                <div className="card-footer">
                    <p>May 20th 2020</p>
                    <p className="font-weight-bold">Read more</p>
                </div>
            </div>
            <div className="card">
                <img src="/card2.png" alt="card2" />
                <div className="card-body">
                    <h3>long established</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is that....</p>
                </div>
                <div className="card-footer">
                    <p>May 20th 2020</p>
                    <p className="font-weight-bold">Read more</p>
                </div>
            </div>
            <div className="card">
                <img src="/card3.png" alt="card3" />
                <div className="card-body">
                    <h3>long established</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is that....</p>
                </div>
                <div className="card-footer">
                    <p>May 20th 2020</p>
                    <p className="font-weight-bold">Read more</p>
                </div>
            </div>
        </section>
    )
}

export default ContentContainer
import "./style.css"

const ContentContainer = () => {

    return (
        <section class="content-container">
            <div class="card">
                <img src="/card1.png" alt="card1" />
                <div class="card-body">
                    <h3>long established</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is that....</p>
                </div>
                <div class="card-footer">
                    <p>May 20th 2020</p>
                    <p class="font-weight-bold">Read more</p>
                </div>
            </div>
            <div class="card">
                <img src="/card2.png" alt="card2" />
                <div class="card-body">
                    <h3>long established</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is that....</p>
                </div>
                <div class="card-footer">
                    <p>May 20th 2020</p>
                    <p class="font-weight-bold">Read more</p>
                </div>
            </div>
            <div class="card">
                <img src="/card3.png" alt="card3" />
                <div class="card-body">
                    <h3>long established</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is that....</p>
                </div>
                <div class="card-footer">
                    <p>May 20th 2020</p>
                    <p class="font-weight-bold">Read more</p>
                </div>
            </div>
        </section>
    )
}

export default ContentContainer
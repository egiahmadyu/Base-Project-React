import "./style.css"

const DescContrainer = () => {

    return (
        <>
            <section class="description-container">
                <div>
                    <div>
                        <h2> long established</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem Ipsum is that....</p>
                    </div>
                    <div class="description-left-footer">
                        <p>May 20th 2020</p>
                        <p class="font-weight-bold">Read more</p>
                    </div>
                </div>
                <img src="/desc.png" alt="desc"/>
            </section>
        </>
    )
}

export default DescContrainer
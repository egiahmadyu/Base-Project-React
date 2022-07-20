import "../css-landing.css"

const DescContrainer = () => {

    return (
        <>
            <section className="description-container">
                <div>
                    <div>
                        <h2> long established</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem Ipsum is that....</p>
                    </div>
                    <div className="description-left-footer">
                        <p>May 20th 2020</p>
                        <p className="font-weight-bold">Read more</p>
                    </div>
                </div>
                <img src="/desc.png" alt="desc"/>
            </section>
        </>
    )
}

export default DescContrainer
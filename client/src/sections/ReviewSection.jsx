import PrimaryScroll from "../animations/PrimaryScroll"

const ReviewSection = () => {
  return (
    <section className=" py-12">
        <div className="main space-y-20">
            <div className="header flex flex-col gap-9 justify-between items-center">
                <PrimaryScroll>
                    <h5 className=' flex items-center text-xs font-semibold gap-2 text-paragraph uppercase tracking-widest'>review</h5>  
                </PrimaryScroll>
                <PrimaryScroll>
                    <h1 className=' uppercase !font-heading heading lg:text-center'>customer voices <br />here what  <span className=' text-primary !font-heading'>they say</span> !</h1>
                </PrimaryScroll>
                </div>
            </div>
    </section>
  )
}

export default ReviewSection
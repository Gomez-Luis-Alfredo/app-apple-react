import { NavLink } from "react-router-dom"

export const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About us</h1>
            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit minima accusamus quo, nostrum sapiente a. Amet cum pariatur, iure quisquam sed quia perferendis ex velit quos deserunt placeat dolore laboriosam?
            Officia placeat blanditiis saepe hic amet, corrupti sint? Nisi magni ratione reprehenderit quo. Repudiandae assumenda unde debitis illum modi recusandae neque soluta quaerat non aspernatur, laudantium rerum nisi nam reiciendis.
            Deleniti, ratione quibusdam at ea error similique numquam officia itaque, sequi eos perspiciatis officiis ipsa neque architecto beatae excepturi repudiandae hic, ad eligendi possimus sunt iure inventore? Repudiandae, atque corporis?
            Nam, provident dolorum maiores omnis molestiae commodi voluptas iste corrupti reprehenderit.</p>
            <NavLink to ="/contact" className="btn btn-outline-primary">Contact us</NavLink>
          </div>
          <div className="col-md-6 my-5 d-flex justify-content-center">
            <img src="/assets/about/about.webp" alt="about" width={500} height={400} />
          </div>
        </div>
      </div>
    </div>
  )
}

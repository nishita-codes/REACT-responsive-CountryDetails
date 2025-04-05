export const Contact = () => {

    const handleFormSubmit = (formData)=>{
        const formInputData = Object.fromEntries(formData.entries()); // data laane ke liye
        console.log(formInputData);
    }
    return (
        <section className="section-contact">
            <h2 className="container-title1">Contact Us</h2>

        <div className="contact-wrapper container">
            <form action={handleFormSubmit}>
               <input type="text" className="form-control" required autoComplete="off" placeholder="Enter your name" name="username" />
               <input type="email" className="form-control" required autoComplete="off" placeholder="Enter your email"  />
               <textarea className="form-control" rows="10" placeholder="Enter your message" name="message" required autoComplete="false"></textarea>

               <button className="send" type="submit" value="send">send</button>
            </form>
            </div>
        </section>
    )
}
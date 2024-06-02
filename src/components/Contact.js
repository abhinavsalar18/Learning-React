
const Contact = () => {
    return (
        <div className="my-6">
            <h1>Contact Us</h1>
           <div className="flex flex-col my-3 justify-center mx-auto gap-4 items-center">
            <div className="px-3 flex flex-col">
                <label className="">Name</label>
                <input placeholder="name" className="border border-green-300 rounded" type="text" name="name"></input>
            </div>
            <div className="px-3 flex flex-col">
                <label>Message</label>
                <input className="border border-green-300 rounded" type="textarea" name="name"></input>
            </div>
            <div className="px-3">
                <button className="px-2 border border-green-300 rounded">Submit</button>
            </div>
           </div>
        </div>
    );
}

export default Contact;
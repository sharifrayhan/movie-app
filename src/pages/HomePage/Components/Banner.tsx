import { useUser } from "@clerk/clerk-react";
import { useState } from "react";


const Banner = () => {

    const { user } = useUser()
    const [newName, setNewName] = useState<string>("")

    const changeName = async () => {
        await user?.update({
            firstName: newName
          });
    }
    return (
        <div className=" h-screen flex items-center justify-center">
            <h1 className="text-8xl ">This is a Movie App</h1> <br />
            <p>Hello {user?.fullName}</p>
            <input onChange={(e)=> setNewName(e.target.value) } type="text"/> <br />
            <button onClick={changeName}>
                       Update a Name 
            </button>
        </div>
    );
};

export default Banner;
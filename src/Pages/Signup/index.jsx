import { Button, Checkbox, Label, TextInput, Toast } from "flowbite-react";
import Navigationbar from "../Common/Navigationbar";
import API from "../../Common/api.js";
import { FaCheck } from 'react-icons/fa'
import { useState } from "react";


function Signup() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target[0].value
        const fullName = event.target[1].value
        const phone = event.target[2].value
        const age = parseInt(event.target[4].value)
        const hasKids = event.target[3].checked
        // const isBelow18 = event.target[5].checked

        const data = {
            email: email,
            fullName: fullName,
            phone: phone,
            age: age,
            hasKids: hasKids,
            publishedAt: null // make it a draft
        }


        API.post('authors/', { data })
            .then(function (response) {
                response.status === 200 ? setIsSubmitted(true) : setIsSubmitted(false)
                event.target.reset();

            })

  
    }

    return (
        <>
        <div className={isSubmitted? "": "hidden"}>
        <div className="space-x-4 divide-x divide-gray-200 dark:divide-gray-700 absolute bottom-4 right-4">
                <Toast>
                    <FaCheck className="h-5 w-5 text-green-600 dark:text-blue-500" />
                    <div className="pl-4 text-sm font-normal">
                        Application has been submitted successfully.
                    </div>
                    <Toast.Toggle />
                </Toast>
            </div>
        </div>


            <div className="mx-auto container px-3 md:px-5">
                <Navigationbar />

                <div className="max-w-xl mx-auto">
                    <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email"
                                    value="Your Email"
                                />
                            </div>
                            <TextInput
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                required={true}
                            />
                        </div>



                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="Full Name"
                                    value="Full Name"
                                />
                            </div>
                            <TextInput
                                id="fullName"
                                type="text"
                                required={true}
                            />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="phone"
                                    value="Phone Number"
                                />
                            </div>
                            <TextInput
                                id="phone"
                                type="text"
                                placeholder="971500000000"
                                required={true}
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <Checkbox id="hasKids" />
                            <Label htmlFor="hasKids">
                                I have kids
                            </Label>
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="age"
                                    value="Age"
                                />
                            </div>
                            <TextInput
                                id="age"
                                type="number"
                                required={true}
                            />
                        </div>

                        <div className="flex gap-2">
                            <div className="flex h-5 items-center">
                                <Checkbox id="shipping" />
                            </div>
                            <div className="flex flex-col">
                                <Label htmlFor="shipping">
                                    I am 18 years or older
                                </Label>
                                <div className="text-gray-500 dark:text-gray-300">
                                    <span className="text-xs font-normal">
                                        You must be 18 years or older to participate
                                    </span>
                                </div>
                            </div>
                        </div>

                        <Button type="submit" color='light'>
                            Submit
                        </Button>
                    </form>
                </div>

            </div>

        </>
    );
}

export default Signup;
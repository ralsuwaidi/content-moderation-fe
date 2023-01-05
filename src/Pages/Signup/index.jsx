import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Navigationbar from "../Common/Navigationbar";


function Signup() {
    return (
        <>
            <div className="mx-auto container px-3 md:px-5">
                <Navigationbar />

                <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            placeholder="name@example.com"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="First Name"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="First Name"
                            type="text"
                            required={true}
                        />
                    </div>
                    <Button type="submit" color='light'>
                        Submit
                    </Button>
                </form>
            </div>

        </>
    );
}

export default Signup;
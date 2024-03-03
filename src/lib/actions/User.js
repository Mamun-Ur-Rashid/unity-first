import User from '@lib/models/User';
import { connectToDB } from '@lib/mongodb/Mongoose';

export const createOrUpdateUser = async (id, first_name, last_name, image_url, email_addresses, username) => {
    try {
        await connectToDB();
        const user = await User.findOneAndUpdate(
            { clerkId: id},
            {
                $set: {
                    firstName : first_name,
                    lastName : last_name,
                    profilePhoto: image_url,
                    email: email_addresses[0].email_address,
                    userName: username,
                }
            },
            { upsert: true, new: true}
        );
        await user.save();
        return user;
    }catch (error) {
        console.error(error);
    }
};

export const deleteUser = async (id) => {
    try {
        await connectToDB();
        await User.findOneAndDelete({ clerkId: id});
    }catch (error) {
        console.error(error);
    }
    
}
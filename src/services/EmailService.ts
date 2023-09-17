import axios from 'axios';

class EmailService {
    /**
     * @param email User's email address.
     * @param fullName User's full name.
     * @returns Promise indicating success or failure.
     */
    public async sendBirthdayEmail(email: string, fullName: string): Promise<boolean> {
        const body = {
            email,
            message: `Hey, ${fullName}, it's your birthday!`
        };

        try {
            const EMAIL_ENDPOINT = `${process.env.EMAIL_ENDPOINT}/send-email`
            const response = await axios.post(EMAIL_ENDPOINT, body);

            if (response.data && response.data.status === 'sent') {
                return true;
            }
            return false;
        } catch (error) {
            console.error(`Failed to send birthday email to ${email}: ${(error as Error).message}`);
            return false;
        }
    }
}

export default new EmailService();
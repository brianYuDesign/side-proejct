import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendOrderEmail = ({ user, booking, store }) => {
  const msg = {
    to: "test@example.com",
    from: "test@example.com",
    subject: "Sending with Twilio SendGrid is Fun",
    text: `${user.name} 您好, 您訂的餐廳: ${
      store.name
    } 訂位時間: ${booking.bookingTime.toString()} 訂位人數 ${booking.party}`
  }
  sgMail.send(msg)
}

export default {
  sendOrderEmail
}

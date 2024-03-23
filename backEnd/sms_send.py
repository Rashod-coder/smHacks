import smtplib
from email.message import EmailMessage
from config import senderEmail, gatewayAddress, appKey

msg = EmailMessage()
msg.set_content('Testing 123.')

msg['From'] = senderEmail 
msg['To'] = gatewayAddress  
msg['Subject'] = 'TESTING'

server = smtplib.SMTP('smtp.gmail.com', 587)
server.starttls()
server.login(senderEmail, appKey)

server.send_message(msg)
server.quit()
import tkinter as tk
import qrcode

def generate_qr_code():
    link = entry_link.get()

    if link:
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        qr.add_data(link)
        qr.make(fit=True)

        qr_code = qr.make_image(fill_color="black", back_color="white")
        qr_code.save("qr_code.png")
        label_status.config(text="QR code generated successfully.", fg="green")
    else:
        label_status.config(text="Please enter a valid link.", fg="red")

# Create the main window
window = tk.Tk()
window.title("QR Code Generator")

# Create the input label and entry field
label_link = tk.Label(window, text="Enter the link:")
label_link.pack()
entry_link = tk.Entry(window, width=50)
entry_link.pack()

# Create the button to generate the QR code
button_generate = tk.Button(window, text="Generate QR Code", command=generate_qr_code)
button_generate.pack()

# Create a label to display the status
label_status = tk.Label(window, text="")
label_status.pack()

# Start the GUI event loop
window.mainloop()
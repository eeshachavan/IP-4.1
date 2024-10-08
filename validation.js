function validateForm() {
    let tagline = document.getElementById('tagline').value;
    let phone = document.getElementById('phone').value;
    let comments = document.getElementById('comments').value;

    // Validate tagline length (maximum 10 characters)
    if (tagline.length > 10) {
        alert('Tagline should not exceed 10 characters.');
        return false;
    }

    // Validate phone number (should be 10 digits)
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Phone number must be 10 digits.');
        return false;
    }

    // Validate additional comments (maximum 200 characters)
    if (comments.length > 200) {
        alert('Comments should not exceed 200 characters.');
        return false;
    }

    // Generate a confirmation message and receipt
    alert('Order submitted successfully!');
    generateReceipt();
    return true;
}

function generateReceipt() {
    let receiptDate = new Date().toLocaleString();
    let recipient = document.getElementById('name').value;
    let color = document.getElementById('color').value;
    let size = document.getElementById('size').value;
    let quantity = document.getElementById('quantity').value;
    let tagline = document.getElementById('tagline').value;
    
    let receipt = `
        Receipt\n
        Date: ${receiptDate}
        Recipient: ${recipient}
        T-shirt Color: ${color}
        Size: ${size}
        Quantity: ${quantity}
        Tagline: ${tagline}
    `;

    console.log(receipt);
    alert(receipt); // You can also show this in a modal or as a PDF
}

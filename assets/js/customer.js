
function populateCustomerDropdown(customers) {
    const customerSelect = $('#customer-list');
    // Add customer options
    customers.forEach(function(customer) {

       

        customerSelect.append(` <button class="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
        <div class="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
          
        ${customer.customerName} <br> ${customer.email}
        </div>
        <div class="flex items-center w-full">
          <div class="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md">${customer.phone}</div>
          <div class="ml-auto text-xs text-gray-500">${customer.created_at}</div>
        </div>
      </button>`);
    });
}

$.ajax({
    type: 'GET', // Adjust the HTTP method as needed
    url: 'https://pwa.onlinebilling.ca/getcustomers', // Replace with your server endpoint URL
    dataType: 'json', // Specify the expected data type
    success: function(response) {
        // Check if the response contains customer data
        if (response && response.customers) {
            const customers = response.customers;
            populateCustomerDropdown(customers);
        }
    },
    error: function() {
        console.error('Error fetching customer data.');
    }
});
// Google Apps Script to save form data to Google Sheets
// Replace 'YOUR_SHEET_NAME' with your actual sheet name

function doPost(e) {
  try {
    // Get the active spreadsheet (the one this script is attached to)
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get form data
    var data = e.parameter;
    
    // Get current timestamp
    var timestamp = new Date();
    
    // Prepare row data in the same order as your sheet headers
    var rowData = [
      timestamp,                                    // Column A: Timestamp
      data.customerType || '',                      // Column B: Customer Type
      data.gstin || '',                             // Column C: GSTIN
      data.entityName || '',                        // Column D: Name of Entity
      data.buyerName || '',                         // Column E: Buyer Name
      data.email || '',                             // Column F: Email Address
      data.mobile || ''                             // Column G: Mobile Number
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Test function to verify the script works
function test() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  Logger.log('Sheet name: ' + sheet.getName());
  Logger.log('Sheet has ' + sheet.getLastRow() + ' rows');
}

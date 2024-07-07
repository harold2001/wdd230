const timestampField = document.getElementById('timestamp');
const now = new Date();
const formattedDateTime = now.toISOString();
timestampField.value = formattedDateTime;

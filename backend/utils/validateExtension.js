function validateExtension(custom_name) {
  if (!custom_name) return false;
  if (custom_name.length > 20) return false;
  return true;
}

module.exports = { validateExtension };

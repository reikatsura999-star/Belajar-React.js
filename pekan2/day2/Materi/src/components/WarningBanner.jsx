
function WarningBanner(props) {
  if (!props.warn) {
    return null; // Tidak me-render apa-apa
  }

  return (
    <div style={{ backgroundColor: 'red', padding: '10px', border: '1px solid orange' }}>
      Peringatan!
    </div>
  );
}
export default WarningBanner
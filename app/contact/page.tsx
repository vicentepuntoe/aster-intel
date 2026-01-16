export default function Contact() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#00152E' }}>
      <div className="container mx-auto px-4 py-8">
        <h1 
          className="text-4xl font-bold text-center"
          style={{
            fontWeight: 800,
            letterSpacing: '-1.92px',
            backgroundImage: 'radial-gradient(circle at 90% 50%, rgb(109, 118, 235), rgb(83, 213, 232) 25%, rgb(90, 189, 233) 47%, rgb(121, 76, 236) 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Contact - Aster Intel
        </h1>
        <p className="text-center mt-4 text-gray-200">Structure ready for implementation</p>
      </div>
    </main>
  );
}

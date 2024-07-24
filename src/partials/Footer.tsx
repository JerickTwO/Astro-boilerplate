const Footer = () => (
  <footer className="bg-gray-900 py-8 text-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-end  justify-between md:flex-row">
        <div className="mt-2 text-center">
          <p>&copy; 2024 Creado por Eduardo Benalcazar.</p>
        </div>
        <div>
          <p className="mt-2">
            Email:{' '}
            <a
              href="mailto:eduardobenalcazar5@gmail.com"
              className="hover:text-gray-400"
            >
              eduardobenalcazar5@gmail.com
            </a>
          </p>
          <p className="mt-2">
            Celular:{' '}
            <a href="tel:+593 981479637" className="hover:text-gray-400">
              +593 981479637
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export { Footer };

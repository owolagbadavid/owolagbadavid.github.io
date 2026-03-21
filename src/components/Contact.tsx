function Contact() {
  return (
    <section className="py-48 text-center bg-surface-container-low" id="contact">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-12 uppercase">
          Let's build <br />
          something resilient.
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a
            className="bg-primary text-on-primary px-12 py-5 text-sm font-bold tracking-widest uppercase hover:bg-primary-fixed transition-all duration-300"
            href="mailto:hello@tobee.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

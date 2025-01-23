import { Mail, Phone, MapPin } from "lucide-react";
import { forwardRef } from "react";

const Connect = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="connect"
      className="min-h-screen flex items-center justify-center bg-natural-100 snap-start"
    >
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-natural-800 mb-12">
          Connect With Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Mail className="h-12 w-12 mx-auto text-natural-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>info@agriruraldev.com</p>
          </div>
          <div className="text-center">
            <Phone className="h-12 w-12 mx-auto text-natural-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="text-center">
            <MapPin className="h-12 w-12 mx-auto text-natural-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p>123 Rural Road, Farmville, CA 12345</p>
          </div>
        </div>
      </div>
    </section>
  );
});
Connect.displayName = "Connect";
export default Connect;

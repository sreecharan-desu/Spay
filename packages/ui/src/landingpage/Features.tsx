import { Shield,CreditCard,CheckCircle } from "lucide-react"
export default function Features(){
    return<>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Why Choose Spay</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;ve built our platform with security, speed, and simplicity in mind.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all">
              <div className="h-12 w-12 bg-black rounded-lg flex items-center justify-center mb-5">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Bank-Grade Security</h3>
              <p className="text-gray-600">
                End-to-end encryption and advanced fraud detection keep your money and data safe.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all">
              <div className="h-12 w-12 bg-black rounded-lg flex items-center justify-center mb-5">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Transfers</h3>
              <p className="text-gray-600">
                Send and receive money in seconds, not days. No waiting periods.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all">
              <div className="h-12 w-12 bg-black rounded-lg flex items-center justify-center mb-5">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Zero Hidden Fees</h3>
              <p className="text-gray-600">
                Transparent pricing with no surprise charges. Know exactly what you pay.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
}
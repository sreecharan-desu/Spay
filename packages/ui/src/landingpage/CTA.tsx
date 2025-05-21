import { ChevronRight } from "lucide-react"

export default function CTA() {
    return (<section className="py-16 md:py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to simplify your payments?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                Join thousands of businesses and individuals who trust Spay for their payment needs.
              </p>
              <button className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition-colors flex items-center">
                Get Started Now <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            <div className="hidden md:block">
              <div className="bg-gray-800 p-8 rounded-lg relative">
                <div className="flex justify-between items-center mb-6">
                  <div className="h-10 w-10 bg-white rounded-md flex items-center justify-center">
                    <span className="text-black font-bold text-xl">S</span>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">Processing Time</p>
                    <p className="text-xl font-bold text-white">Instant</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="w-full bg-gray-700 h-2 rounded-full mb-2">
                    <div className="bg-white h-2 rounded-full w-4/5"></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>80% faster than traditional banks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}




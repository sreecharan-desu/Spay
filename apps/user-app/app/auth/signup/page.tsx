/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignUpPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const res = await fetch('/api/v1/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })

      let data: any
      try {
        data = await res.json()
      } catch (jsonError) {
        console.log(jsonError)
        throw new Error('Failed to parse response from server')
      }

      if (!res.ok || data?.success === false) {
        const msg = data?.msg || data?.message || 'Something went wrong.'
        throw new Error(msg)
      }

      router.push('/auth/signin')
    } catch (err: any) {
      console.error('Signup Error:', err)
      if (err?.message?.includes('NetworkError') || err?.message?.includes('Failed to fetch')) {
        setError('Network error. Please check your internet connection.')
      } else if (err?.message?.toLowerCase().includes('email already')) {
        setError('This email is already in use. Try signing in instead.')
      } else {
        setError(err.message || 'An unexpected error occurred.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-3xl font-bold text-black text-center">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-4 py-2 border border-black rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-black rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-black rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="••••••••"
              required
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-900 transition-colors font-semibold"
          >
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  )
}

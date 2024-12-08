"use client"

import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Calculator, User, Equal, Plus, Minus, X, Divide } from 'lucide-react'
import { cn } from '@/lib/utils'

const MathCalculator = () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')

  const operators = [
    { symbol: '+', icon: Plus, description: "Addition" },
    { symbol: '-', icon: Minus, description: "Subtraction" },
    { symbol: '*', icon: X, description: "Multiplication" },
    { symbol: '/', icon: Divide, description: "Division" },
  ]

  const calculate = () => {
    setError('')
    setResult('')

    const value1 = parseFloat(num1)
    const value2 = parseFloat(num2)

    if (isNaN(value1) || isNaN(value2)) {
      setError('Please enter valid numeric values.')
      return
    }

    try {
      let calculationResult
      switch (operator) {
        case '+':
          calculationResult = value1 + value2
          break
        case '-':
          calculationResult = value1 - value2
          break
        case '*':
          calculationResult = value1 * value2
          break
        case '/':
          if (value2 === 0) {
            setError('Division by zero is not allowed.')
            return
          }
          calculationResult = value1 / value2
          break
        default:
          setError('Invalid operator selected.')
          return
      }

      setResult(calculationResult.toFixed(4).replace(/\.?0+$/, ''))
    } catch (err) {
      console.error(err)
      setError('An error occurred during calculation.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-2xl font-bold">
              <Calculator className="w-8 h-8" />
              Math Calculator
            </CardTitle>
            <div className="flex items-center gap-2 text-sm bg-white/20 px-3 py-1 rounded-full">
              <User className="w-4 h-4" />
              Ruchira Madushan
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="space-y-2">
            <label htmlFor="num1" className="block text-sm font-medium text-gray-700">
              Number 1
            </label>
            <Input 
              id="num1"
              type="text" 
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              placeholder="Enter first number"
              className="w-full transition-all duration-200 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Operator
            </label>
            <div className="grid grid-cols-4 gap-2">
              {operators.map((op) => (
                <Button
                  key={op.symbol}
                  variant="outline"
                  className={cn(
                    "flex items-center justify-center gap-1 transition-all duration-200 ease-in-out",
                    operator === op.symbol
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "hover:bg-blue-100"
                  )}
                  onClick={() => setOperator(op.symbol)}
                >
                  <op.icon className="w-5 h-5" />
                  <span className="sr-only">{op.description}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="num2" className="block text-sm font-medium text-gray-700">
              Number 2
            </label>
            <Input 
              id="num2"
              type="text" 
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              placeholder="Enter second number"
              className="w-full transition-all duration-200 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Button 
            onClick={calculate} 
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <Equal className="mr-2 w-5 h-5" />
            Calculate
          </Button>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
              {error}
            </div>
          )}

          {result !== '' && (
            <div className="bg-green-50 border border-green-200 p-4 rounded-md text-center animate-fade-in-up">
              <span className="text-2xl font-bold text-green-700">Result: {result}</span>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default MathCalculator


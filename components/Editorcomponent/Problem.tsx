import React from 'react'

const ProblemV0 = () => {
  return (
    <div className="p-[20px] overflow-scroll" >
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Two Sum</h1>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-yellow-500 px-2 py-1 text-xs font-medium text-white">Easy</div>
            </div>
          </div>
          <div className="space-y-4">
            <p>
              Given an array of integers <code>nums</code> and an integer <code>target</code>, return{" "}
              <em>indices of the two numbers such that they add up to</em> <code>target</code>.
            </p>
            <p>
              You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the{" "}
              <em>same</em> element twice.
            </p>
            <p>You can return the answer in any order.</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Test Cases</h2>
            <div className="grid gap-4">
              <div className="rounded-md border border-gray-200 p-4 dark:border-gray-800">
                <h3 className="mb-2 font-medium">Test Case 1</h3>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-2">
                  <div>
                    <label className="text-sm font-medium">Input</label>
                    <pre className="rounded-md bg-gray-50 p-2 text-sm dark:bg-gray-900">
                      <code>nums = [2, 7, 11, 15], target = 9</code>
                    </pre>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Output</label>
                    <pre className="rounded-md bg-gray-50 p-2 text-sm dark:bg-gray-900">
                      <code>[0, 1]</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="rounded-md border border-gray-200 p-4 dark:border-gray-800">
                <h3 className="mb-2 font-medium">Test Case 2</h3>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-2">
                  <div>
                    <label className="text-sm font-medium">Input</label>
                    <pre className="rounded-md bg-gray-50 p-2 text-sm dark:bg-gray-900">
                      <code>nums = [3, 2, 4], target = 6</code>
                    </pre>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Output</label>
                    <pre className="rounded-md bg-gray-50 p-2 text-sm dark:bg-gray-900">
                      <code>[1, 2]</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="rounded-md border border-gray-200 p-4 dark:border-gray-800">
                <h3 className="mb-2 font-medium">Test Case 3</h3>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-2">
                  <div>
                    <label className="text-sm font-medium">Input</label>
                    <pre className="rounded-md bg-gray-50 p-2 text-sm dark:bg-gray-900">
                      <code>nums = [3, 3], target = 6</code>
                    </pre>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Output</label>
                    <pre className="rounded-md bg-gray-50 p-2 text-sm dark:bg-gray-900">
                      <code>[0, 1]</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-bold">Constraints</h2>
            <ul className="list-disc space-y-1 pl-6 text-sm">
              <li>
                <code>2 &lt;= nums.length &lt;= 10^4</code>
              </li>
              <li>
                <code>-10^9 &lt;= nums[i] &lt;= 10^9</code>
              </li>
              <li>
                <code>-10^9 &lt;= target &lt;= 10^9</code>
              </li>
              <li>
                <strong>Only one valid answer exists.</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default ProblemV0
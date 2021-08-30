import React from 'react';

const ComparisonTable = () => {
    return (
        <div className="comparisonTable__container">
            <table className="comparisonTable">
                <thead>
                    <tr>
                        <th colspan="3">2021 Cost of Living Comparison</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="comparisonTable__subheader">
                        <td>Item</td>
                        <td className="comparisonTable__center">Milwaukee</td>
                        <td className="comparisonTable__center">Chicago</td>
                    </tr>
                    <tr>
                        <td>Salary</td>
                        <td className="comparisonTable__blue">$65,000-$125,000/yr</td>
                        <td className="comparisonTable__center">$85,000-$145,000/yr</td>
                    </tr>
                    <tr>
                        <td>Living Costs</td>
                        <td className="comparisonTable__blue">$100,000/yr</td>
                        <td className="comparisonTable__center">$127,141/yr</td>
                    </tr>
                    <tr>
                        <td>Rent</td>
                        <td className="comparisonTable__blue">$1,308/mo</td>
                        <td className="comparisonTable__center">$1,480/mo</td>
                    </tr>
                    <tr>
                        <td>Housing</td>
                        <td className="comparisonTable__blue">$268,400</td>
                        <td className="comparisonTable__center">$265,100</td>
                    </tr>
                    <tr>
                        <td>Commute</td>
                        <td className="comparisonTable__blue">22 minutes</td>
                        <td className="comparisonTable__center">35 minutes</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    )
}

export default ComparisonTable
import React from 'react'

export default function DisplayHis() {
    return (
        <div>
            <div class="container table-responsive">          
                <table class="table table-dark table-striped table-hover">
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Phone:</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>DD/MM/YY</td>
                        <td>Le Trung Tin</td>
                        <td>tin@gmail.com</td>
                        <td>113</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

import React from 'react'
import "./AboutTitle.css";
export default function AboutTitle({ img }) {
    return (
        <div className='about title row'>
            <div className='col-lg-5 col-12'>
                <div className='img'>
                    <img src={img} alt="img" />
                </div>
            </div>
            <div className='col-lg-7 col-12'>
                <div className='Specifications'>
                    <h3>UI/UX & Graphic Designer</h3>
                    <p><em>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque corrupti vel et aliquid aperiam excepturi enim fuga commodi animi doloribus, debitis est dignissimos voluptatibus voluptas libero? Beatae, dicta! Pariatur, deserunt</em></p>
                    <div className='row'>
                        <ul className='ul col-lg-6'>
                            <li className='bi bi-chevron-right'><strong>Birthday:</strong><span>1 May 1995</span></li>
                            <li className='bi bi-chevron-right'><strong>Website:</strong><span>www.example.com</span></li>
                            <li className='bi bi-chevron-right'><strong>Phone:</strong><span>+123 456 7890</span></li>
                            <li className='bi bi-chevron-right'><strong>City:</strong><span>New York, USA</span></li>
                        </ul>
                        <ul className='ul col-lg-6'>
                            <li className='bi bi-chevron-right'><strong>Age:</strong><span>30</span></li>
                            <li className='bi bi-chevron-right'><strong>Degree:</strong><span>Master</span></li>
                            <li className='bi bi-chevron-right'><strong>PhEmailone:</strong><span>email@example.com</span></li>
                            <li className='bi bi-chevron-right'><strong>Freelance:</strong><span>Available</span></li>
                        </ul>
                    </div>
                    <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magni fugit magnam repudiandae.</p>
                </div>
            </div>

        </div>
    )
}

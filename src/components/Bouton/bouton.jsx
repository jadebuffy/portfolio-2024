import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './bouton.css';

const BoutonOverlay = ({ children, onClick }) => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const button = e.target;
            const overlay = button.querySelector('.hover-button__overlay');
            if (!overlay) return;

            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            overlay.style.width = `${rect.width}px`;
            overlay.style.height = `${rect.height}px`;
            overlay.style.top = `${y}px`;
            overlay.style.left = `${x}px`;
        };

        const handleMouseLeave = (e) => {
            const button = e.target;
            const overlay = button.querySelector('.hover-button__overlay');
            if (!overlay) return;

            overlay.style.width = '0';
            overlay.style.height = '0';
        };

        const buttons = document.querySelectorAll('.hover-button');

        buttons.forEach((button) => {
            button.addEventListener('mousemove', handleMouseMove);
            button.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            buttons.forEach((button) => {
                button.removeEventListener('mousemove', handleMouseMove);
                button.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <button className="hover-button" onClick={onClick}>
            {children}
            <span className="hover-button__overlay"></span>
        </button>
    );
};

BoutonOverlay.propTypes = {
    children: PropTypes.node.isRequired,
};

export default BoutonOverlay;

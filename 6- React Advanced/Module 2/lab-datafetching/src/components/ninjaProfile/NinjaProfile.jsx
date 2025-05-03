import React from 'react';
import './NinjaProfile.css';

const NinjaProfile = ({ member }) => {
    if (!member) return null;

    const {
        name,
        images,
        debut,
        family,
        jutsu,
        natureType,
        personal,
        voiceActors,
    } = member;

    return (
        <div className="profile-container">
            <h2 className="profile-name">👤 {name}</h2>

            {images?.[0] && (
                <img
                    src={images[0]}
                    alt={name}
                    className="profile-image"
                />
            )}

            <div className="profile-section">
                <p><strong>🏷️ Classification:</strong> {personal?.classification}</p>
                <p><strong>💼 Occupation:</strong> {personal?.occupation}</p>
                <p><strong>🌐 Affiliation:</strong> {personal?.affiliation?.join(', ')}</p>

                <div>
                    <strong>📖 Debut:</strong>
                    <ul>
                        <li>📺 <strong>Anime:</strong> {debut?.anime}</li>
                        <li>📚 <strong>Manga:</strong> {debut?.manga}</li>
                        <li>🎮 <strong>Game:</strong> {debut?.game}</li>
                    </ul>
                </div>


                <p><strong>🌪️ Nature Types:</strong> {natureType?.join(', ')}</p>



                <div>
                    <strong>🌀 Jutsus:</strong>
                    <ul>
                        {jutsu?.slice(0, 5).map((j, index) => (
                            <li key={index}>✨ {j}</li>
                        ))}
                        {jutsu?.length > 5 && <li>➕ ...and more</li>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NinjaProfile;

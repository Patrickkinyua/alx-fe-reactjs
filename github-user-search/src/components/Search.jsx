import { useState } from "react";
import { fetchUserData } from "../services/githubService.js";

export default function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username.trim());
      setUser(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      {/* Search Form */}
      <div className="search-form-card">
        <form onSubmit={handleSearch} className="search-form">
          <div className="search-input-container">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter GitHub username..."
              className="search-input"
            />
            <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button 
            type="submit"
            disabled={loading || !username.trim()}
            className="search-button"
          >
            {loading ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="loading-spinner"></div>
                Searching...
              </div>
            ) : (
              "Search"
            )}
          </button>
        </form>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="loading-container">
          <div className="loading-spinner-large"></div>
          <p className="loading-text">Searching for user...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="error-container">
          <svg className="error-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <p className="error-text">{error}</p>
        </div>
      )}

      {/* User Profile Card */}
      {user && (
        <div className="user-card fade-in">
          <div className="user-header">
            <div className="user-info">
              <div className="user-avatar-container">
                <img
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                  className="user-avatar"
                />
                {user.type === 'User' && (
                  <div className="user-type-badge">
                    User
                  </div>
                )}
              </div>
              <div className="user-details">
                <h2 className="user-username">{user.login}</h2>
                {user.name && <p className="user-name">{user.name}</p>}
                {user.bio && <p className="user-bio">{user.bio}</p>}
              </div>
            </div>
          </div>
          
          <div className="user-content">
            <div className="stats-grid">
              <div className="stat-card stat-repos">
                <div className="stat-number">{user.public_repos}</div>
                <div className="stat-label">Repositories</div>
              </div>
              <div className="stat-card stat-followers">
                <div className="stat-number">{user.followers}</div>
                <div className="stat-label">Followers</div>
              </div>
              <div className="stat-card stat-following">
                <div className="stat-number">{user.following}</div>
                <div className="stat-label">Following</div>
              </div>
            </div>

            <div className="action-buttons">
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="action-button action-button-primary"
              >
                View GitHub Profile
              </a>
              {user.blog && (
                <a
                  href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-button action-button-secondary"
                >
                  Visit Website
                </a>
              )}
            </div>

            {user.location && (
              <div className="user-location">
                <svg className="location-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {user.location}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

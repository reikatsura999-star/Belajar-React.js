import React from "react";
//css nya
const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    padding: 20,
    maxWidth: 720,
    margin: "0 auto",
    gap: 20,
    display: "flex",
    flexDirection: "column"
  },

  card: {
    display: "flex",
    gap: 16,
    padding: 16,
    border: "1px solid #38d943ff",
    borderRadius: 8,
    alignItems: "flex-start",
    background: "#58df95ff"
  },

  photo: {
    width: 96,
    height: 96,
    objectFit: "cover",
    borderRadius: 8
  },
  info: {
    flex: 1
  },

  name: {
    margin: 0,
    fontSize: 18
  },

  bio: {
    margin: "8px 0",
    color: "#444"
  },

  skillsList: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    margin: 0
  },

  skillPill: {
    background: "#f1f8ff",
    color: "#0b63ff",
    padding: "4px 8px",
    borderRadius: 12,
    fontSize: 12
  },

  section: {
    padding: 12,
    border: "1px solid #eee",
    borderRadius: 8,
    background: "#4ca6ebff"
  },

  list: {
    margin: 0,
    paddingLeft: 18
  }
};


//logic nya
function ProfileCard({ name, photo, bio, skills }) {
  return (
    <div style={styles.card}>
      <img src={photo} alt={name} style={styles.photo} />
      <div style={styles.info}>
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.bio}>{bio}</p>

        <h4 style={{ margin: "8px 0 6px 0" }}>Skills</h4>
        <ul style={styles.skillsList}>
          {skills.map((s) => (
            <li key={s} style={styles.skillPill}>
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DiscountExample({ price, discountRate }) {
  const discounted = price - price * discountRate;
  function formatRupiah(n) {
    return "Rp " + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div style={styles.section}>
      <div>Harga awal: {formatRupiah(price)}</div>
      <div>Diskon: {Math.round(discountRate * 100)}%</div>
      <div>
        Harga setelah diskon: <strong>{formatRupiah(Math.round(discounted))}</strong>
      </div>
    </div>
  );
}

function Greeting({ user }) {
  function shout(name) {
    return "Hai, " + name + "!";
  }

  return (
    <div style={styles.section}>
      <div>{shout(user)}</div>
    </div>
  );
}

function ConditionalStatus({ isLoggedIn, unreadCount }) {
  return (
    <div style={styles.section}>
      <div>
        {isLoggedIn ? <strong>Anda sudah login</strong> : <strong>Silakan login</strong>}
      </div>
      <div>{unreadCount > 0 && <span>Pesan belum dibaca: {unreadCount}</span>}</div>
    </div>
  );
}

function FruitsList({ items }) {
  return (
    <div style={styles.section}>
      <h4>Daftar Buah</h4>
      <ul style={styles.list}>
        {items.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name} ({fruit.color})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  const user = {
    name: "Alya Ramadhani",
    photo: "https://i.pinimg.com/236x/f7/94/52/f794521586e71c9554a071961e52359f.jpg",
    bio: "maaf aku masih pemula,baru belajar React.js",
    skills: ["HTML", "CSS", "JavaScript", "React"]
  };

  const price = 50000;
  const discountRate = 0.15;
  const isLoggedIn = true;
  const unreadCount = 3;
  const fruits = [
    { id: "f1", name: "Mangga", color: "Kuning" },
    { id: "f2", name: "Apel", color: "Merah" },
    { id: "f3", name: "Pisang", color: "Kuning" }
  ];

  return (
    <div style={styles.app}>
      <ProfileCard
        name={user.name}
        photo={user.photo}
        bio={user.bio}
        skills={user.skills}
      />

      <DiscountExample price={price} discountRate={discountRate} />

      <Greeting user={user.name} />

      <ConditionalStatus isLoggedIn={isLoggedIn} unreadCount={unreadCount} />

      <FruitsList items={fruits} />
    </div>
  );
}
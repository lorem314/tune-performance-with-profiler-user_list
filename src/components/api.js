const getRandomUsers = async (count) => {
  const data = await fetch(
    `https://api.randomuser.me/?nat=US&results=${count}`
  );
  return await data.json();
};

export { getRandomUsers };

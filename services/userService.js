const { UserRepository } = require('../repositories/userRepository');

class UserService {
  // TODO: Implement methods to work with user
  getAll() {
    return UserRepository.getAll();
  }

  create(data) {
    const item = UserRepository.create(data);
    return item;
  }

  update(search, data) {
    const item = UserRepository.update(search, data);
    return item;
  }

  delete(search) {
    try {
      UserRepository.delete(search);
    } catch (error) {
      console.log(error);
    }
  }

  search(search) {
    const item = UserRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }
}

module.exports = new UserService();

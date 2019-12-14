export default model => {
  return {
    getAll: () => model.find(),
    getById: id => model.findById(id),
    getByFilter: filter => model.find(filter),
    getOne: filter => model.findOne(filter),
    create: input => model.create(input),
    update: (id, input) => model.findByIdAndUpdate(id, input, { new: true }),
    delete: async id => {
      await model.findByIdAndUpdate(id, { isEnabled: false }, { new: true })
      return id
    }
  }
}

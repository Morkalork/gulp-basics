function ViewModel() {
	var self = this;

	self.name = ko.observable("");
	self.email = ko.observable("");
	self.result = ko.computed(function() {
		return "Name: " + self.name() +
			", email: " + self.email();
	});
};

ko.applyBindings(new ViewModel());
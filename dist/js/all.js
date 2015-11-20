function ViewModel(){var e=this;e.name=ko.observable(""),e.email=ko.observable(""),e.result=ko.computed(function(){return"Name: "+e.name()+", email: "+e.email()})}ko.applyBindings(new ViewModel);
